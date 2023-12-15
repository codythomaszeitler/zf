export interface CreateableSObject {
	getSObjectName() : string;
	intoKeyValueString(): string;
}
