const pervNumber= require('./task1');

describe('pervNumber',() =>{
  test ('return first number',() =>{
    expect(pervNumber (4)).toBe(4);
    expect(pervNumber (232)).toBe(2);
    expect(pervNumber (76.5)).toBe(7);
  });
})

