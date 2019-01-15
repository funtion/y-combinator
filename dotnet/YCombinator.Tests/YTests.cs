namespace Tests
{
    using NUnit.Framework;
    using YCombinator;

    [TestFixture]
    public class YTests
    {
        [TestCase(3, 6)]
        [TestCase(5, 120)]
        [TestCase(6, 720)]
        public void TestFactorial(int input, int expected)
        {
            int result = Y.Map<int, int>((self, n) => n == 0 ? 1 : n * self(n - 1))(input);
            Assert.AreEqual(expected, result);
        }
    }
}