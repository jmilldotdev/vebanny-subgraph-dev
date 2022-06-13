import {
  JVeBanny as JVeBannyContract,
  Lock as LockEvent,
} from "../generated/JVeBanny/JVeBanny";
import { VeNftToken, LockInfo } from "../generated/schema";

export function handleLock(event: LockEvent): void {
  const token = new VeNftToken(event.params.tokenId.toHexString());
  token.createdAtTimestamp = event.block.timestamp;
  token.tokenId = event.params.tokenId.toI32();
  token.owner = event.params.beneficiary;

  const tokenContract = JVeBannyContract.bind(event.address);
  token.tokenUri = tokenContract.tokenURI(event.params.tokenId);

  const lockInfoData = tokenContract.locked(event.params.tokenId);
  const lockInfo = new LockInfo(event.params.tokenId.toHexString());
  lockInfo.amount = lockInfoData.value0;
  lockInfo.end = lockInfoData.value1.toI32();
  lockInfo.duration = lockInfoData.value2.toI32();
  lockInfo.useJbToken = lockInfoData.value3;
  lockInfo.allowPublicExtension = lockInfoData.value4;
  lockInfo.save();

  token.lockInfo = lockInfo.id;
  token.save();
}
