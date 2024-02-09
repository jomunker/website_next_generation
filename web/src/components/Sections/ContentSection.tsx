
type ContentSectionProps = {
    title?: string;
    description?: string;
  };

export default function ContentSection({ title, description }:ContentSectionProps){
    return(<>
      <h2>{title}</h2>
      <p>{description}</p>
    </>) 
}