import moment from 'moment';

export const transFormGroup = (group) => {
  return {
    id: group.id,
    title: group.name,
    plan: Math.round(group.planValue),
    fact: Math.round(group.factValue),
    progress: Math.round(group.progress_diff),
    height: 40,
    // progress: true,
    color: group.color,
  };
};

export const transFormItem = (group) => {
  return {
    id: group.id,
    group: group.id, // обязательно для привязки item к group
    color: group.color,
    current_date: moment().valueOf(),
    title:
      group.plannedStart && group.plannedEnd
        ? `${moment(group.plannedStart).format('DD.MM')} — ${moment(group.plannedEnd).format(
            'DD.MM',
          )}`
        : null,
    start_time: group.plannedStart ? moment(group.plannedStart).valueOf() : null,
    end_time: group.plannedEnd ? moment(group.plannedEnd).endOf('day').valueOf() : null, // endOf('day') устанавливаем время в конце дня на 23:59 чтобы выбранный день в item был подностью закрашен
    itemProps: {
      className: 'bordernone',
      style: {
        background: group.color,
        border: 'none',
      },
    },
  };
};

export const transformByImageArray = (byImageArr) => {
  return byImageArr.map((byImgObj) => {
    // создаем копию массива и сортируем его, чтобы вывести stages по id
    const sortedStages = [...(byImgObj.report?.stages || [])].sort((a, b) => a.id - b.id);
    // Преобразуем каждую stage
    const transformedStages = sortedStages.map((stage) => ({
      id: stage.id,
      title: stage.name,
      done: Math.round(stage.factValue),
      color: stage.color,
      height: 40,
      progress: true, // поменять
    }));

    return {
      image: byImgObj.image,
      predicted_image: byImgObj.predicted_image,
      stages: transformedStages,
    };
  });
};
