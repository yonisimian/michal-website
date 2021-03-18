import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

const Paging = (props) => {
    const {items, itemsPerPage, curPage, setCurPage, pagesPerSection, curSection, setCurSection} = props.data
    const maxPage = Math.max(0, Math.floor((items.length - 1) / itemsPerPage))
    const maxSection = Math.max(0, Math.floor((maxPage) / pagesPerSection))

    const setFirstPage = () => {
        setCurPage(0)
        setCurSection(0)
    }

    const setPrevPage = () => {
        let newPage = Math.max(curPage - 1, 0)
        setCurPage(newPage)
        setCurSection(Math.floor(newPage / pagesPerSection))
    }

    const setPrevSection = () => {
        let newSection = Math.max(curSection - 1, 0)
        setCurSection(newSection)
        setCurPage((newSection + 1) * pagesPerSection - 1)
    }

    const setNextSection = () => {
        let newSection = Math.min(curSection + 1, maxSection)
        setCurSection(newSection)
        setCurPage(newSection * pagesPerSection)
    }

    const setNextPage = () => {
        let newPage = Math.min(curPage + 1, maxPage)
        setCurPage(newPage)
        setCurSection(Math.floor(newPage / pagesPerSection))
    }

    const setLastPage = () => {
        setCurPage(maxPage)
        setCurSection(maxSection)
    }

    return (
        <Pagination dir="ltr" style={{margin: "20px 0"}}>
            <Pagination.First onClick={setFirstPage} />
            <Pagination.Prev onClick={setPrevPage} />
            {curSection !== 0 &&
                <>
                    <Pagination.Item
                        key={0}
                        active={0 === curPage}
                        onClick={() => setCurPage(0)}>
                            {1}
                    </Pagination.Item>
                    <Pagination.Ellipsis onClick={setPrevSection} />
                </>
            }
            {items.filter((shift, shiftID) => shiftID % itemsPerPage === 0)
                    .filter((shift, page) => page < pagesPerSection * (curSection + 1) && page >= pagesPerSection * curSection)
                    .map((shift, index) =>
                <Pagination.Item
                    key={index + (curSection * pagesPerSection)}
                    active={(index + (curSection * pagesPerSection)) === curPage}
                    onClick={() => setCurPage(index + (curSection * pagesPerSection))}>
                        {index + (curSection * pagesPerSection) + 1}
                </Pagination.Item>
            )}
            {curSection !== maxSection &&
                <>
                    <Pagination.Ellipsis onClick={setNextSection} />
                    <Pagination.Item
                        key={maxPage}
                        active={(maxPage) === curPage}
                        onClick={() => setCurPage(maxPage)}>
                            {maxPage + 1}
                    </Pagination.Item>
                </>
            }
            <Pagination.Next onClick={setNextPage} />
            <Pagination.Last onClick={setLastPage} />
        </Pagination>
    );
}

export default Paging;
