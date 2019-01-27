def Y(f):
    def g(self):
        return lambda n: f(self(self), n)
    return lambda n: g(g)(n)
