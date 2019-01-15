using System;

namespace YCombinator
{
    public static class Y
    {
        delegate T P<T>(P<T> p);

        public static Func<In, Out> Map<In, Out>(Func<Func<In, Out>, In, Out> f)
        {
            P<Func<In, Out>> g = (self) =>
            {
                return (n) => f(self(self), n);
            };

            return n => g(g)(n);
        }
    }
}
