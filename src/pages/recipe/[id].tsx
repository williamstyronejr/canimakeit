import type { NextPage } from 'next';
import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Recipe from '../../components/Recipe';
const fetcher = async (id: string) => {
  const res = await fetch(`/api/recipes/${id}`);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const RecipePage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id ? router.query.id : '';

  return (
    <>
      <Recipe id={id} />
    </>
  );
};

export default RecipePage;
