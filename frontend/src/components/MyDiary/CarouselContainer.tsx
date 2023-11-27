import { useState } from 'react';

import { IDiaryContent } from '@type/components/Common/DiaryList';

import Icon from '@components/Common/Icon';
import Card from '@components/MyDiary/Card';

import { PREV_INDEX, LARGE, NEXT_INDEX, SMALL } from '@util/constants';

const CarouselContainer = (data: IDiaryContent[]) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dataLength = Object.keys(data).length;

  return (
    <section className="flex w-fit items-center justify-center">
      <Card
        data={
          data[activeIndex === 0 ? activeIndex + PREV_INDEX + dataLength : activeIndex + PREV_INDEX]
        }
        styles="w-1/3"
        size={SMALL}
      />
      <button
        onClick={() =>
          setActiveIndex(
            activeIndex === 0 ? activeIndex + PREV_INDEX + dataLength : activeIndex + PREV_INDEX,
          )
        }
      >
        <Icon id="largeLeftArrow" size={LARGE} />
      </button>
      <Card data={data[activeIndex]} styles="w-2/3" />
      <button onClick={() => setActiveIndex((activeIndex + NEXT_INDEX) % dataLength)}>
        <Icon id="largeRightArrow" size={LARGE} />
      </button>
      <Card data={data[(activeIndex + NEXT_INDEX) % dataLength]} styles="w-1/3" size={SMALL} />
    </section>
  );
};

export default CarouselContainer;