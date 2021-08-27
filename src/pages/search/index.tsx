import type { NextPage } from 'next';
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import useSWR from 'swr';
import Recipe from '../../components/Recipe';
import styles from '../../styles/SearchResults.module.css';

Modal.setAppElement('#__next');

const fetcher = async (ingredients: string) => {
  const res = await fetch(`/api/recipes?search=${ingredients}`);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const SearchResults: NextPage = () => {
  const router = useRouter();
  const ingredients = router.query.ingredients ? router.query.ingredients : '';
  const id = router.query.id;

  const { data, error } = useSWR(ingredients, fetcher);

  if (error) return <div>error</div>;
  if (!data) return <div>Loading ...</div>;
  const { recipes } = data;

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>

      <section>
        {recipes.length === 0 ? (
          <div>No recipes found. Try changing your search filters.</div>
        ) : null}

        <div>
          <ul>
            {recipes.map((recipe: { id: number; title: string }) => (
              <li key={recipe.id}>
                <h4>
                  <Link
                    href={`/search?id=${recipe.id}&ingredients=${ingredients}`}
                    as={`/recipe/${recipe.id}`}
                    shallow={true}
                  >
                    {recipe.title}
                  </Link>
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Modal
        isOpen={!!id}
        onRequestClose={() => {
          router.push(`/search?ingredients=${ingredients}`);
        }}
      >
        <Recipe id={id} />
      </Modal>
    </>
  );
};

export default SearchResults;
