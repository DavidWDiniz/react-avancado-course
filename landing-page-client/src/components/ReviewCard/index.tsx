import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import * as S from './styles'
import { getImageUrl } from '../../utils/getImage Url'
import { Review } from '../../types/api'

type Props = {
  id: number
  review: Review
}

const ReviewCard = ({ id, review }: Props) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image
          src={getImageUrl(review.photo.url)}
          alt={review.name}
          loading="lazy"
        />
        <S.Name>{review.name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{review.text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
