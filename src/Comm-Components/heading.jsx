const Heading = ({ level, text, className }) => {
    const HeadingTag = `h${level}`;

    return (
      <HeadingTag className={className}>
        {text}
      </HeadingTag>
    );
  };
  
  export default Heading;