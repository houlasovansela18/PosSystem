import Realm, { BSON, ObjectSchema } from 'realm';

export class Invoice extends Realm.Object<Invoice> {
  _id!: BSON.UUID;
  name!: string;

  static schema: ObjectSchema = {
    name: 'Invoice',
    properties: {
      _id: 'uuid',
      name: { type: 'string', indexed: 'full-text' },
    },
    primaryKey: '_id',
  };
}
