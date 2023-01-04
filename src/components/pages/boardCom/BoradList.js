import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchBoard } from "components/Firebase"
import styled from "styled-components";
import Pagination from "./BoardPagination";

const BoardLists = styled.ul`

    display: flex;
    flex-direction: column;
  .textTitle {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: calc(100% - 7.5rem);
    padding-left: 0.313rem;
    border-right: 1px solid #ddd;
  }
  .titleName {
    width: 7.5rem;
    text-align: center;
  }
  li {
    padding: 0.5rem;
    border-radius: 0.313rem;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
    border: ${props => (props.isdark ? "1px solid #ffffff81" : "1px solid #00000058")};
    span {
      display: inline-block;
      font-size: 0.875rem;
    }
  }

    .writeBtn {
    width: 5rem;
    align-self: flex-end;
    background-color: dodgerblue;
      border-radius: 8px;
      color: #fff;
      transition: 0.5s;
      padding: 0.625rem 1.25rem;
      &:hover {
        background-color: orangered;
      }
  }
`;


function BoardList() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const limit = useRef(10);
    useEffect(() => {

        fetchBoard().then(data => {
          const context = data.docs.map((doc) => ({
            ...doc.data(),
          }));
          setPosts(context);
        });
        return () => {
          fetchBoard();
        };
      }, []);

      const offset = (page - 1) * limit.current;

    return ( 
        <>
         <BoardLists>
            {posts.slice(offset, offset + limit.current).map(ele => (
              <Link
                key={ele.id}
                to={{
                  pathname: `/Board/${ele.id}`,
                }}
              >
                <li style={{ marginBottom: "8px" }}>
                  <span className='textTitle'>{ele.title}</span>
                  <span className='titleName'>{ele.name}</span>
                </li>
              </Link>
            ))}
            
            <Link className="writeBtn" to ='/Board/write'><span>Write!</span></Link>
            
          </BoardLists>
          <footer>
          <Pagination total={posts.length} limit={limit.current} page={page} setPage={setPage} />
        </footer>
        </>
     );
}

export default BoardList;