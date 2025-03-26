/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  StokvelFactory,
  StokvelFactory_StokvelCreated,
} from "generated";

StokvelFactory.StokvelCreated.handler(async ({ event, context }) => {
  const entity: StokvelFactory_StokvelCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stokvelAddress: event.params.stokvelAddress,
    creator: event.params.creator,
    contributionAmount: event.params.contributionAmount,
    name: event.params.name,
    maxMembers: event.params.maxMembers,
    payoutTimeframe: event.params.payoutTimeframe,
  };

  context.StokvelFactory_StokvelCreated.set(entity);
});
