import css from './MovieReviewsItem.module.css';

export default function MovieReviewsItem({ review }) {
  return (
    <div>
      <b>Author: {review.author}</b>
      <p>{review.content}</p>
    </div>
  );
}
