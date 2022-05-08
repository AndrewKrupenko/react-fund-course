import {getPagesArray} from "../../../utils/pages"

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = getPagesArray(totalPages)

  return (
    <div className="page__wrapper">
      {pagesArray.map(pageNumber =>
        <span
          key={pageNumber}
          className={page === pageNumber ? 'page page__current' : 'page'}
          onClick={() => changePage(pageNumber)}
        >
            {pageNumber}
          </span>
      )}
    </div>
  )
}

export default Pagination