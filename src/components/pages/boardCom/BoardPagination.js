import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 12px;
`;
const Button = styled.button`
  border: none;
  border-radius: 8px;
  box-shadow: ${props => (props.isDark ? "0 0 5px rgba(255, 255, 255, 0.2)" : "0 0 5px rgba(0, 0, 0, 0.2)")};
  padding: 10px;
  margin: 0;
  background: ${props => (props.isDark ? "#333" : "#fff")};
  color: ${props => (props.isDark ? "#fff" : "#333")};
  font-size: 1rem;
  transition: 0.5s;
  cursor: pointer;
  &[disabled] {
    cursor: revert;
    transform: revert;
    background-color: ${props => (props.isDark ? "#ffffffa0" : "#333333a0")};
    color: ${props => (props.isDark ? "#333" : "#fff")};
  }
  &[aria-current] {
    font-weight: bold;
    background-color: dodgerblue;
    color: #fff;
    cursor: revert;
    transform: revert;
  }
  &:not(:first-child, :last-child, [aria-current]):hover {
    background: ${props => (props.isDark ? "#ffffffae" : "#333")};
    color: #fff;
    transform: translateY(-2px);
  }
`

function Pagination({ total, limit, page, setPage }) {
  const numPages= Math.ceil(total / limit);
  return (
    <Nav>
      <Button className='btn' onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill(1)
        .map((ele, i) => (
          <Button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : undefined}>
            {i + 1}
          </Button>
        ))}
      <Button className='btn' onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

export default Pagination;