type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject = { name: "Object1", color: "red", email: 3 }; // чому не підсвічує ось тут email як помилку?
const bottomObject = { position: 1, weight: 50 };

const result = compare(topObject, bottomObject);
console.log(result);
