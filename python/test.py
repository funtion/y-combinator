import unittest

from Y import Y


class YTest(unittest.TestCase):
    def test_factorial(self):
        for i, expected in [(3, 6), (4, 24), (5, 120)]:
            result = Y(lambda s, n: 1 if n == 0 else n * s(n-1))(i)
            self.assertEqual(result, expected)


if __name__ == '__main__':
    unittest.main()
