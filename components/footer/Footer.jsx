const author = `toquir ahmed`;

export default function Footer() {
  return (
    <>
      <footer>
        <p className="footer_left">
          &copy; {new Date().getFullYear()} {author} - All rights reserved
        </p>
        <div className="footer_right"></div>
      </footer>
    </>
  );
}
