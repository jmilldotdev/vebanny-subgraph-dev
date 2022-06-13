import {
  JVeBanny as JVeBannyContract,
  Lock as LockEvent,
  ExtendLock as ExtendLockEvent,
  Unlock as UnlockEvent,
} from "../generated/JVeBanny/JVeBanny";
import { VeNftToken } from "../generated/schema";

export function handleLock(event: LockEvent): void {
  const token = new VeNftToken(event.params.tokenId.toHexString());
  token.createdAtTimestamp = event.block.timestamp;
  token.tokenId = event.params.tokenId.toI32();
  token.owner = event.params.beneficiary;

  const tokenContract = JVeBannyContract.bind(event.address);
  token.tokenUri = tokenContract.tokenURI(event.params.tokenId);
  const lockInfoData = tokenContract.locked(event.params.tokenId);
  token.lockAmount = lockInfoData.value0;
  token.lockEnd = lockInfoData.value1.toI32();
  token.lockDuration = lockInfoData.value2.toI32();
  token.lockUseJbToken = lockInfoData.value3;
  token.lockAllowPublicExtension = lockInfoData.value4;
  token.isUnlocked = false;
  token.save();
}

export function handleExtendLock(event: ExtendLockEvent): void {
  const token = VeNftToken.load(event.params.oldTokenID.toHexString());
  if (token === null) {
    throw new Error("Token not found");
  }
  token.lockDuration = event.params.updatedDuration.toI32();

  // TODO: Fix when updatedLockEnd is fixed
  const tokenContract = JVeBannyContract.bind(event.address);
  const lockInfoData = tokenContract.locked(event.params.oldTokenID);
  token.lockEnd = lockInfoData.value1.toI32();
  token.save();
}

export function handleUnlock(event: UnlockEvent): void {
  const token = VeNftToken.load(event.params.tokenId.toHexString());
  if (token === null) {
    throw new Error("Token not found");
  }
  token.isUnlocked = true;
  token.save();
}
