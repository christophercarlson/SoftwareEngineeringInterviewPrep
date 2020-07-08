var warrior = 'ninja'

const screamwarrior = () => {
  let warrior2 = 'Samurai';
  return {
    shootWarrior: () => {
      return console.log(warrior, warrior2)
    }
  }
}

const newWarrior = screamwarrior()
newWarrior.shootWarrior();
//console.log(warrior, warrior2)