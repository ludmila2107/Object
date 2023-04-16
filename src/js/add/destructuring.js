export default function extract({ special }) {
  return special.map(({ description = 'Описание недоступно', ...rest }) => ({
    ...rest,
    description,
  }));
}
