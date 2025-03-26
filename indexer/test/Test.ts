import assert from "assert";
import { 
  TestHelpers,
  StokvelFactory_StokvelCreated
} from "generated";
const { MockDb, StokvelFactory } = TestHelpers;

describe("StokvelFactory contract StokvelCreated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for StokvelFactory contract StokvelCreated event
  const event = StokvelFactory.StokvelCreated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("StokvelFactory_StokvelCreated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await StokvelFactory.StokvelCreated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualStokvelFactoryStokvelCreated = mockDbUpdated.entities.StokvelFactory_StokvelCreated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedStokvelFactoryStokvelCreated: StokvelFactory_StokvelCreated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      stokvelAddress: event.params.stokvelAddress,
      creator: event.params.creator,
      contributionAmount: event.params.contributionAmount,
      name: event.params.name,
      maxMembers: event.params.maxMembers,
      payoutTimeframe: event.params.payoutTimeframe,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualStokvelFactoryStokvelCreated, expectedStokvelFactoryStokvelCreated, "Actual StokvelFactoryStokvelCreated should be the same as the expectedStokvelFactoryStokvelCreated");
  });
});
