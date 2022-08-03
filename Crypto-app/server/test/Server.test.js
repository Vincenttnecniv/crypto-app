const Delete = require("../deleteReq.mjs");

test("backend should match snapshot", async () => {
  //Server test
  const backend = await Delete("backend");
  expect(backend).toMatchSnapshot();
});
