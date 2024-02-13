
const fontStyle = {
    description: { fontSize: '18px' }
};

export const BookDescription = ({data}) => {
  return (
    <div style={fontStyle.description} dangerouslySetInnerHTML={{ __html: data }} />
  )
}
