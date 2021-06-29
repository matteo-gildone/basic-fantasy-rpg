const modifiers = [
    0, 0, 0, -3, -2, -2, -1, -1, -1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3,
];

const getModifier = (score) => modifiers[score];

const isRolled = (score) => score > 0;

// const isDisabled = (race) => (abilities) => {
//     const {minAbilities, maxAbilities} = race;
//     const isTooLittle =
//         minAbilities.length > 0
//             ? minAbilities.every((a) => abilities[a] < 9)
//             : false;
//     const isTooMuch =
//         minAbilities.length > 0
//             ? maxAbilities.every((a) => abilities[a] > 17)
//             : false;
//
//     return isTooLittle || isTooMuch;
// };

export {getModifier, isRolled};
