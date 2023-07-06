import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDistance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Distance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sourcePort?: string | null;
  readonly destinationPort?: string | null;
  readonly distance?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDistance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Distance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sourcePort?: string | null;
  readonly destinationPort?: string | null;
  readonly distance?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Distance = LazyLoading extends LazyLoadingDisabled ? EagerDistance : LazyDistance

export declare const Distance: (new (init: ModelInit<Distance>) => Distance) & {
  copyOf(source: Distance, mutator: (draft: MutableModel<Distance>) => MutableModel<Distance> | void): Distance;
}