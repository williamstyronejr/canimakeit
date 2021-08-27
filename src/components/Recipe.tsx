import * as React from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import DomPurify from 'dompurify';

const fetcher = async (id: string) => {
  const res = await fetch(`/api/recipes/${id}`);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Recipe = ({ id }: { id: string | string[] | undefined }) => {
  if (!id) return <div>Nothing here</div>;

  const { data, error } = useSWR(id, fetcher);

  if (error) return <div>error</div>;
  if (!data) return <div>Loading ...</div>;
  const { recipe } = data;

  console.log(recipe);
  return (
    <>
      <Head>
        <title>{recipe.title}</title>
      </Head>

      <section>
        <header>
          <h2>{recipe.title}</h2>

          <ul>
            {recipe.diets.map((diet: string) => (
              <li key={diet}>{diet}test</li>
            ))}
          </ul>
          <img src={recipe.image} />
        </header>

        <div>
          <aside>
            <div>Total Time: {recipe.readyInMinutes} Minutes</div>

            <div>
              <ul>
                {recipe.extendedIngredients.map(
                  (ingredient: { original: string; id: number }) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  )
                )}
              </ul>
            </div>
          </aside>

          <div
            dangerouslySetInnerHTML={{
              __html: DomPurify.sanitize(recipe.summary),
            }}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: DomPurify.sanitize(recipe.instructions),
            }}
          />
        </div>
      </section>
    </>
  );
};
export default Recipe;
