import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { PostType } from '../../types';

export const DataFetching = () => {
  const [post, setPost] = useState<Partial<PostType>>({});
  const [id, setId] = useState('1');
  const [idFromButtonClick, setIdFromButtonClick] = useState('1');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [id, idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
    </div>
  );
};
