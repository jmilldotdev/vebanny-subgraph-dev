import { BigInt } from "@graphprotocol/graph-ts"
import {
  JVeBanny,
  Approval,
  ApprovalForAll,
  DelegateChanged,
  DelegateVotesChanged,
  ExtendLock,
  Lock,
  OwnershipTransferred,
  Redeem,
  SetAllowPublicExtension,
  SetUriResolver,
  Transfer,
  Unlock
} from "../generated/JVeBanny/JVeBanny"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MAXTIME(...)
  // - contract.MULTIPLIER(...)
  // - contract.WEEK(...)
  // - contract.balanceOf(...)
  // - contract.contractURI(...)
  // - contract.count(...)
  // - contract.delegates(...)
  // - contract.epoch(...)
  // - contract.extendLock(...)
  // - contract.getApproved(...)
  // - contract.getPastTotalSupply(...)
  // - contract.getPastVotes(...)
  // - contract.getSpecs(...)
  // - contract.getVotes(...)
  // - contract.isApprovedForAll(...)
  // - contract.lock(...)
  // - contract.lockDurationOptions(...)
  // - contract.locked(...)
  // - contract.name(...)
  // - contract.operatorStore(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.pointHistory(...)
  // - contract.projectId(...)
  // - contract.slopeChanges(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.token(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenPointEpoch(...)
  // - contract.tokenPointHistory(...)
  // - contract.tokenStore(...)
  // - contract.tokenURI(...)
  // - contract.tokenVotingPowerAt(...)
  // - contract.totalSupply(...)
  // - contract.uriResolver(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleDelegateChanged(event: DelegateChanged): void {}

export function handleDelegateVotesChanged(event: DelegateVotesChanged): void {}

export function handleExtendLock(event: ExtendLock): void {}

export function handleLock(event: Lock): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRedeem(event: Redeem): void {}

export function handleSetAllowPublicExtension(
  event: SetAllowPublicExtension
): void {}

export function handleSetUriResolver(event: SetUriResolver): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnlock(event: Unlock): void {}
