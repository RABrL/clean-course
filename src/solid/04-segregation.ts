// sin segregacion de interfaces
/* interface Bird {
  eat(): void
  fly(): void
  run(): void
  swim(): void
}*/

// Con segregacion de interfaces
interface Bird {
  eat(): void
}

interface FlyingBird extends Bird {
  fly(): void
}

interface RunningBird extends Bird {
  run(): void
}

interface SwimmerBird extends Bird {
  swim(): void
}

class Tucan implements FlyingBird {
  public fly() {}
  public eat() {}
}

class HumminBird implements FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements SwimmerBird {
  public eat() {}
  public swim() {}
}
