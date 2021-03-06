// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables
const API_KEY = process.env.API_KEY;

type Data = {
  recipes: Array<Record<string, unknown>>;
};

// Sample of data returns for reference
const sampleData = [
  {
    id: 632140,
    title: 'Almond Horns',
    image: 'https://spoonacular.com/recipeImages/632140-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 1002050,
        amount: 3.0,
        unit: 'tablespoons',
        unitLong: 'tablespoons',
        unitShort: 'Tbsp',
        aisle: 'Baking',
        name: 'almond extract',
        original: '3 tablespoons almond extract',
        originalString: '3 tablespoons almond extract',
        originalName: 'almond extract',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/extract.png',
      },
      {
        id: 12062,
        amount: 8.0,
        unit: 'cups',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Nuts;Savory Snacks',
        name: 'blanched almonds',
        original: '8 cups Finely chopped blanched almonds',
        originalString: '8 cups Finely chopped blanched almonds',
        originalName: 'Finely chopped blanched almonds',
        metaInformation: ['finely chopped'],
        meta: ['finely chopped'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/blanched-almonds.png',
      },
      {
        id: 1124,
        amount: 6.0,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Milk, Eggs, Other Dairy',
        name: 'egg whites',
        original: '6 Egg whites',
        originalString: '6 Egg whites',
        originalName: 'Egg whites',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/egg-white.jpg',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 15,
  },
  {
    id: 635315,
    title: 'Blood Orange Margarita',
    image: 'https://spoonacular.com/recipeImages/635315-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 1009206,
        amount: 1.0,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Beverages',
        name: 'blood orange juice',
        original: '1 cup fresh-squeezed blood orange juice',
        originalString: '1 cup fresh-squeezed blood orange juice',
        originalName: 'fresh-squeezed blood orange juice',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/blood-orange-juice.jpg',
      },
      {
        id: 10814037,
        amount: 8.0,
        unit: 'ounces',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Alcoholic Beverages',
        name: 'tequila',
        original: '8 ounces premium tequila-reposada',
        originalString: '8 ounces premium tequila-reposada',
        originalName: 'premium tequila-reposada',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/tequila.png',
      },
      {
        id: 14534,
        amount: 7.0,
        unit: 'ounces',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Alcoholic Beverages',
        name: 'triple sec',
        original: '7 ounces triple sec',
        originalString: '7 ounces triple sec',
        originalName: 'triple sec',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/white-rum.jpg',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 3,
  },
  {
    id: 635260,
    title: 'Blackcurrant Sauce',
    image: 'https://spoonacular.com/recipeImages/635260-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 14130,
        amount: 0.5,
        unit: 'cup',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Beverages',
        name: 'creme soda',
        original: '1/2 cup Creme de Cassis',
        originalString: '1/2 cup Creme de Cassis',
        originalName: 'Creme de Cassis',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/soda-can.jpg',
      },
      {
        id: 19297,
        amount: 100.0,
        unit: 'grams',
        unitLong: 'grams',
        unitShort: 'g',
        aisle: 'Nut butters, Jams, and Honey',
        name: 'jelly',
        original: '100 grams redcurrant jelly',
        originalString: '100 grams redcurrant jelly',
        originalName: 'redcurrant jelly',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/strawberry-jam.png',
      },
      {
        id: 9152,
        amount: 1.0,
        unit: 'tablespoon',
        unitLong: 'tablespoon',
        unitShort: 'Tbsp',
        aisle: 'Produce',
        name: 'lemon juice',
        original: '1 tablespoon lemon juice',
        originalString: '1 tablespoon lemon juice',
        originalName: 'lemon juice',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 2,
  },
  {
    id: 1155776,
    title: 'Easy Homemade Chocolate Truffles',
    image: 'https://spoonacular.com/recipeImages/1155776-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 2050,
        amount: 1.5,
        unit: 'tsp',
        unitLong: 'teaspoons',
        unitShort: 'tsp',
        aisle: 'Baking',
        name: 'vanilla',
        original: '1 1/2 tsp vanilla',
        originalString: '1 1/2 tsp vanilla',
        originalName: 'vanilla',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg',
      },
      {
        id: 1017,
        amount: 8.0,
        unit: 'oz',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Cheese',
        name: 'cream cheese',
        original: '1 8 oz. package cream cheese',
        originalString: '1 8 oz. package cream cheese',
        originalName: 'package cream cheese',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg',
      },
      {
        id: 10019903,
        amount: 3.0,
        unit: 'cups',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Baking',
        name: 'semi sweet chocolate chips',
        original: '3 cups semi sweet chocolate chips melted',
        originalString: '3 cups semi sweet chocolate chips melted',
        originalName: 'semi sweet chocolate chips melted',
        metaInformation: ['sweet', 'melted'],
        meta: ['sweet', 'melted'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/chocolate-chips.jpg',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 2,
  },
  {
    id: 664089,
    title: 'Turkish Delight',
    image: 'https://spoonacular.com/recipeImages/664089-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 19296,
        amount: 1.0,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Nut butters, Jams, and Honey',
        name: 'honey',
        original: '1 cup honey',
        originalString: '1 cup honey',
        originalName: 'honey',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/honey.png',
      },
      {
        id: 1085,
        amount: 2.0,
        unit: 'cups',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Milk, Eggs, Other Dairy',
        name: 'non-fat milk',
        original: '2 cups non-fat dry milk',
        originalString: '2 cups non-fat dry milk',
        originalName: 'non-fat dry milk',
        metaInformation: ['dry'],
        meta: ['dry'],
        extendedName: 'dry non-fat milk',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.jpg',
      },
      {
        id: 16098,
        amount: 1.0,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Nut butters, Jams, and Honey',
        name: 'peanut butter',
        original: '1 cup peanut butter',
        originalString: '1 cup peanut butter',
        originalName: 'peanut butter',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/peanut-butter.png',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 1,
  },
  {
    id: 635778,
    title: 'Boysenberry Syrup',
    image: 'https://spoonacular.com/recipeImages/635778-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 9057,
        amount: 1.0,
        unit: 'pound',
        unitLong: 'pound',
        unitShort: 'lb',
        aisle: 'Produce;Frozen',
        name: 'boysenberries',
        original: '1 pound Boysenberries',
        originalString: '1 pound Boysenberries',
        originalName: 'Boysenberries',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/blackberries.jpg',
      },
      {
        id: 19296,
        amount: 4.0,
        unit: 'ounces',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Nut butters, Jams, and Honey',
        name: 'honey',
        original: '4 ounces Honey',
        originalString: '4 ounces Honey',
        originalName: 'Honey',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/honey.png',
      },
      {
        id: 1002068,
        amount: 2.0,
        unit: 'pints',
        unitLong: 'pints',
        unitShort: 'pts',
        aisle: 'Oil, Vinegar, Salad Dressing',
        name: 'white wine vinegar',
        original: '2 pints White wine vinegar',
        originalString: '2 pints White wine vinegar',
        originalName: 'White wine vinegar',
        metaInformation: ['white'],
        meta: ['white'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/vinegar-(white).jpg',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 1,
  },
  {
    id: 660400,
    title: 'Smoky Baby Back Ribs',
    image: 'https://spoonacular.com/recipeImages/660400-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 10192,
        amount: 2.0,
        unit: 'racks',
        unitLong: 'racks',
        unitShort: 'racks',
        aisle: 'Meat',
        name: 'baby back ribs',
        original: '2 racks baby back ribs, whole but cracked',
        originalString: '2 racks baby back ribs, whole but cracked',
        originalName: 'baby back ribs, whole but cracked',
        metaInformation: ['whole'],
        meta: ['whole'],
        extendedName: 'whole baby back ribs',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/baby-back-ribs.jpg',
      },
      {
        id: 27027,
        amount: 2.0,
        unit: 'cups',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Canned and Jarred;Ethnic Foods',
        name: 'pico de gallo',
        original: '2 cups pico de gallo (fresh vege salsa)',
        originalString: '2 cups pico de gallo (fresh vege salsa)',
        originalName: 'pico de gallo (fresh vege salsa)',
        metaInformation: ['fresh', '( vege salsa)'],
        meta: ['fresh', '( vege salsa)'],
        extendedName: 'fresh pico de gallo',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/pico-de-gallo.png',
      },
      {
        id: 19003,
        amount: 1.0,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Savory Snacks',
        name: 'corn chips',
        original: '1 cup hickory chips',
        originalString: '1 cup hickory chips',
        originalName: 'hickory chips',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/fritos-or-corn-chips.jpg',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 1,
  },
  {
    id: 631763,
    title:
      'Warm and Luscious Sipping Chocolate with Xocai Healthy Dark Sipping Xocolate',
    image: 'https://spoonacular.com/recipeImages/631763-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 1077,
        amount: 2.0,
        unit: 'cups',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Milk, Eggs, Other Dairy',
        name: 'milk',
        original: '2 cups milk (Milk)',
        originalString: '2 cups milk (Milk)',
        originalName: 'milk (Milk)',
        metaInformation: ['(Milk)'],
        meta: ['(Milk)'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
      },
      {
        id: 14197,
        amount: 0.25,
        unit: 'cup',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Beverages',
        name: 'hot chocolate mix',
        original: '1/4 cup hot chocolate mix (Xocai Sipping Xocolate)',
        originalString: '1/4 cup hot chocolate mix (Xocai Sipping Xocolate)',
        originalName: 'hot chocolate mix (Xocai Sipping Xocolate)',
        metaInformation: ['hot', '(Xocai Sipping Xocolate)'],
        meta: ['hot', '(Xocai Sipping Xocolate)'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/cocoa-powder.png',
      },
      {
        id: 2050,
        amount: 0.5,
        unit: 'tsp',
        unitLong: 'teaspoons',
        unitShort: 'tsp',
        aisle: 'Baking',
        name: 'vanilla extract',
        original: '1/2 tsp vanilla extract (Vanilla)',
        originalString: '1/2 tsp vanilla extract (Vanilla)',
        originalName: 'vanilla extract (Vanilla)',
        metaInformation: ['(Vanilla)'],
        meta: ['(Vanilla)'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 1,
  },
  {
    id: 632253,
    title: 'Alouette?? Cranberry Brie',
    image: 'https://spoonacular.com/recipeImages/632253-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 2025,
        amount: 0.125,
        unit: 'teaspoon',
        unitLong: 'teaspoons',
        unitShort: 'tsp',
        aisle: 'Spices and Seasonings',
        name: 'ground nutmeg',
        original: '1/8 teaspoon ground nutmeg',
        originalString: '1/8 teaspoon ground nutmeg',
        originalName: 'ground nutmeg',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/ground-nutmeg.jpg',
      },
      {
        id: 12511111,
        amount: 3.0,
        unit: 'teaspoons',
        unitLong: 'teaspoons',
        unitShort: 'tsp',
        aisle: 'Baking',
        name: 'orange extract',
        original: '3 teaspoons rum or orange extract',
        originalString: '3 teaspoons rum or orange extract',
        originalName: 'rum or orange extract',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/extract.png',
      },
      {
        id: 12142,
        amount: 2.0,
        unit: 'tablespoons',
        unitLong: 'tablespoons',
        unitShort: 'Tbsp',
        aisle: 'Nuts;Baking',
        name: 'pecans',
        original: '2 tablespoons chopped pecans',
        originalString: '2 tablespoons chopped pecans',
        originalName: 'chopped pecans',
        metaInformation: ['chopped'],
        meta: ['chopped'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/pecans.jpg',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 1,
  },
  {
    id: 632293,
    title: 'Amaretto Petit Fours',
    image: 'https://spoonacular.com/recipeImages/632293-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 0,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 18133,
        amount: 1.0,
        unit: 'Pound',
        unitLong: 'Pound',
        unitShort: 'lb',
        aisle: 'Bakery/Bread',
        name: 'lb cake',
        original: '1 frozen Pound cake',
        originalString: '1 frozen Pound cake',
        originalName: 'frozen Pound cake',
        metaInformation: ['frozen'],
        meta: ['frozen'],
        extendedName: 'frozen lb cake',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/pound-cake.jpg',
      },
      {
        id: 10014534,
        amount: 1.0,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Alcoholic Beverages',
        name: 'amaretto',
        original: '1 cup of Amaretto',
        originalString: '1 cup of Amaretto',
        originalName: 'Amaretto',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/temporary-orange-liqueur.jpg',
      },
      {
        id: 1214,
        amount: 2.0,
        unit: 'tablespoons',
        unitLong: 'tablespoons',
        unitShort: 'Tbsp',
        aisle: 'Baking',
        name: 'evaporated milk',
        original: '2 tablespoons canned evaporated milk',
        originalString: '2 tablespoons canned evaporated milk',
        originalName: 'canned evaporated milk',
        metaInformation: ['canned'],
        meta: ['canned'],
        extendedName: 'canned evaporated milk',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/evaporated-milk.png',
      },
    ],
    usedIngredients: [],
    unusedIngredients: [],
    likes: 1,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const { search } = req.query;
  if (!search || search === '') return res.status(200).json({ recipes: [] });

  try {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${search}`
    ).then((res) => (res.status === 200 ? res.json() : []));

    res.status(200).json({ recipes: data });
  } catch (err) {
    return res.status(200).json({ recipes: [] });
  }
}
