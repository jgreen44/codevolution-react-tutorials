import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Loading } from '../Loading';

export const ReducerDataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        setLoading(false);
        setPost(response.data);
        setError('');
      })
      .catch(error => {
        setLoading(false);
        setPost({});
        setError(`Something went wrong! Error: ${error}`);
      });
  }, []);

  return (
    <div>
      {loading ? <Loading /> : post.title}
      {error ? error : null}
    </div>
  );
};
