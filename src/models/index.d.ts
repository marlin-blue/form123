import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDistance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Distance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly port1?: string | null;
  readonly port2?: string | null;
  readonly port3?: string | null;
  readonly port4?: string | null;
  readonly port5?: string | null;
  readonly port6?: string | null;
  readonly cargo1?: string | null;
  readonly cargo2?: string | null;
  readonly cargo3?: string | null;
  readonly cargo4?: string | null;
  readonly cargo5?: string | null;
  readonly cargo6?: string | null;
  readonly miscCosts?: number | null;
  readonly craneUsage?: number | null;
  readonly cargo5_quanity?: number | null;
  readonly cargo6_quantity?: number | null;
  readonly cargo4_quantity?: number | null;
  readonly cargo3_quantity?: number | null;
  readonly cargo2_quantity?: number | null;
  readonly cargo1_quantity?: number | null;
  readonly cargo3_rate?: number | null;
  readonly cargo4_rate?: number | null;
  readonly cargo5_rate?: number | null;
  readonly cargo6_rate?: number | null;
  readonly cargo1_rate?: number | null;
  readonly cargo2_rate?: number | null;
  readonly portDays?: number | null;
  readonly bunker_rate?: number | null;
  readonly diesel_rate?: number | null;
  readonly cargo5quantity?: number | null;
  readonly port1fees?: number | null;
  readonly port2fees?: number | null;
  readonly port3fees?: number | null;
  readonly port6fees?: number | null;
  readonly port5fees?: number | null;
  readonly port4fees?: number | null;
  readonly vesselhn5?: boolean | null;
  readonly vesselhn7?: boolean | null;
  readonly vesselhn9?: boolean | null;
  readonly surveyingfees?: number | null;
  readonly vesselht1?: boolean | null;
  readonly vesselhn10?: boolean | null;
  readonly vesselht20?: boolean | null;
  readonly vesselht21?: boolean | null;
  readonly luberate?: number | null;
  readonly Field4?: string | null;
  readonly port2craneusage?: number | null;
  readonly port2portcall?: number | null;
  readonly port1portcall?: number | null;
  readonly port1craneusage?: number | null;
  readonly port3portcall?: number | null;
  readonly port3craneusage?: number | null;
  readonly port4portcall?: number | null;
  readonly port4craneusage?: number | null;
  readonly port5portcall?: number | null;
  readonly port5craneusage?: number | null;
  readonly port6portcall?: number | null;
  readonly port6craneusage?: number | null;
  readonly brokeragefees?: number | null;
  readonly voyagetype?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDistance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Distance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly port1?: string | null;
  readonly port2?: string | null;
  readonly port3?: string | null;
  readonly port4?: string | null;
  readonly port5?: string | null;
  readonly port6?: string | null;
  readonly cargo1?: string | null;
  readonly cargo2?: string | null;
  readonly cargo3?: string | null;
  readonly cargo4?: string | null;
  readonly cargo5?: string | null;
  readonly cargo6?: string | null;
  readonly miscCosts?: number | null;
  readonly craneUsage?: number | null;
  readonly cargo5_quanity?: number | null;
  readonly cargo6_quantity?: number | null;
  readonly cargo4_quantity?: number | null;
  readonly cargo3_quantity?: number | null;
  readonly cargo2_quantity?: number | null;
  readonly cargo1_quantity?: number | null;
  readonly cargo3_rate?: number | null;
  readonly cargo4_rate?: number | null;
  readonly cargo5_rate?: number | null;
  readonly cargo6_rate?: number | null;
  readonly cargo1_rate?: number | null;
  readonly cargo2_rate?: number | null;
  readonly portDays?: number | null;
  readonly bunker_rate?: number | null;
  readonly diesel_rate?: number | null;
  readonly cargo5quantity?: number | null;
  readonly port1fees?: number | null;
  readonly port2fees?: number | null;
  readonly port3fees?: number | null;
  readonly port6fees?: number | null;
  readonly port5fees?: number | null;
  readonly port4fees?: number | null;
  readonly vesselhn5?: boolean | null;
  readonly vesselhn7?: boolean | null;
  readonly vesselhn9?: boolean | null;
  readonly surveyingfees?: number | null;
  readonly vesselht1?: boolean | null;
  readonly vesselhn10?: boolean | null;
  readonly vesselht20?: boolean | null;
  readonly vesselht21?: boolean | null;
  readonly luberate?: number | null;
  readonly Field4?: string | null;
  readonly port2craneusage?: number | null;
  readonly port2portcall?: number | null;
  readonly port1portcall?: number | null;
  readonly port1craneusage?: number | null;
  readonly port3portcall?: number | null;
  readonly port3craneusage?: number | null;
  readonly port4portcall?: number | null;
  readonly port4craneusage?: number | null;
  readonly port5portcall?: number | null;
  readonly port5craneusage?: number | null;
  readonly port6portcall?: number | null;
  readonly port6craneusage?: number | null;
  readonly brokeragefees?: number | null;
  readonly voyagetype?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Distance = LazyLoading extends LazyLoadingDisabled ? EagerDistance : LazyDistance

export declare const Distance: (new (init: ModelInit<Distance>) => Distance) & {
  copyOf(source: Distance, mutator: (draft: MutableModel<Distance>) => MutableModel<Distance> | void): Distance;
}