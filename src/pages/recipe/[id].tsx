import type { NextPage } from 'next';
import * as React from 'react';
import { useRouter } from 'next/router';
import Recipe from '../../components/Recipe';

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
