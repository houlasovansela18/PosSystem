import React from 'react';
import { RealmProvider } from '@realm/react';
import { BaseProps } from 'types';
import { AnyRealmObject, ObjectSchema, RealmObjectConstructor } from 'realm';

type StorageProviderProps = BaseProps & {
  schema?: (RealmObjectConstructor<AnyRealmObject> | ObjectSchema)[];
};

export default function StorageProvider(props: StorageProviderProps) {
  return <RealmProvider schema={props.schema}>{props.chidren}</RealmProvider>;
}
