// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class VeNftToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save VeNftToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type VeNftToken must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("VeNftToken", id.toString(), this);
    }
  }

  static load(id: string): VeNftToken | null {
    return changetype<VeNftToken | null>(store.get("VeNftToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): i32 {
    let value = this.get("tokenId");
    return value!.toI32();
  }

  set tokenId(value: i32) {
    this.set("tokenId", Value.fromI32(value));
  }

  get tokenUri(): string {
    let value = this.get("tokenUri");
    return value!.toString();
  }

  set tokenUri(value: string) {
    this.set("tokenUri", Value.fromString(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get lockAmount(): BigInt {
    let value = this.get("lockAmount");
    return value!.toBigInt();
  }

  set lockAmount(value: BigInt) {
    this.set("lockAmount", Value.fromBigInt(value));
  }

  get lockEnd(): i32 {
    let value = this.get("lockEnd");
    return value!.toI32();
  }

  set lockEnd(value: i32) {
    this.set("lockEnd", Value.fromI32(value));
  }

  get lockDuration(): i32 {
    let value = this.get("lockDuration");
    return value!.toI32();
  }

  set lockDuration(value: i32) {
    this.set("lockDuration", Value.fromI32(value));
  }

  get lockUseJbToken(): boolean {
    let value = this.get("lockUseJbToken");
    return value!.toBoolean();
  }

  set lockUseJbToken(value: boolean) {
    this.set("lockUseJbToken", Value.fromBoolean(value));
  }

  get lockAllowPublicExtension(): boolean {
    let value = this.get("lockAllowPublicExtension");
    return value!.toBoolean();
  }

  set lockAllowPublicExtension(value: boolean) {
    this.set("lockAllowPublicExtension", Value.fromBoolean(value));
  }

  get isUnlocked(): boolean {
    let value = this.get("isUnlocked");
    return value!.toBoolean();
  }

  set isUnlocked(value: boolean) {
    this.set("isUnlocked", Value.fromBoolean(value));
  }
}
