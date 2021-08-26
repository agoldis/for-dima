let i = 3;
describe('Wikipedia', function () {
  it(
    'Runs a test',
    {
      retries: 3,
    },
    function () {
      if (i > 1) {
        i--;
        throw new Error('oh!');
      }
      return;
    }
  );
});
