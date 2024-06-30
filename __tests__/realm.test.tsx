import Realm from 'realm';

const Person = {
  name: 'Person',
  properties: {
    name: 'string',
  },
};

const realm = new Realm({ schema: [Person] });

const addPerson = (name: string) => {
  realm.write(() => {
    realm.create('Person', { name });
  });
};

const getPersons = () => {
  return realm.objects('Person');
};

jest.mock('realm', () => {
  const mockObjects = jest.fn();
  const mockWrite = jest.fn(callback => callback());
  const mockCreate = jest.fn();

  return jest.fn().mockImplementation(() => ({
    objects: mockObjects,
    write: mockWrite,
    create: mockCreate,
  }));
});

test('should add a person to the database', () => {
  addPerson('GODDA');
  expect(realm.write).toHaveBeenCalledTimes(1);
  expect(realm.create).toHaveBeenCalledWith('Person', { name: 'GODDA' });
});

test('should get test person from the database', () => {
  const mockPersons = [{ name: 'GODDA' }];
  // @ts-ignore
  realm.objects.mockReturnValue(mockPersons);
  const persons = getPersons();

  expect(persons).toBe(mockPersons);
});
