import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { tabbedInterface } from 'utils/index';

Modal.setAppElement('#__next');

const sort = [
  {
    id: 'metadata_modified:desc',
    name: 'Last Modified',
  },
  {
    id: 'score:desc',
    name: 'Relevance',
  },
  {
    id: 'title_string:asc',
    name: 'Name Ascending',
  },
  {
    id: 'title_string:desc',
    name: 'Name Descending',
  },
  {
    id: 'views_recent:desc',
    name: 'Popular',
  },
];

type Props = {
  data: any;
  newData: boolean;
  fq: any;
};

const objMobile = {};
const DataAlter: React.FC<{ data?: any; newData?: any; fq?: any }> = ({
  data,
  newData,
  fq,
}) => {
  const router = useRouter();
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState(
    router.query.sort ? router.query.sort : 'metadata_modified:desc'
  );

  useEffect(() => {
    setTimeout(() => {
      const tablist = document.getElementById('filterSelector');
      const panels = document.querySelectorAll(
        '.dialog__body [role="tabpanel"]'
      );
      if (tablist) tabbedInterface(tablist, panels);
    }, 50);
  }, [filterIsOpen]);

  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector('#modalSort')) {
        document
          .querySelector('#modalSort')
          .addEventListener('change', (e: any) => {
            setCurrentSort(e.target.value);
          });
      }

      const selectedSort = document.getElementById(
        currentSort as string
      ) as HTMLInputElement;
      if (selectedSort) selectedSort.checked = true;

      // Create filter object
      if (data)
        Object.keys(data).forEach((val) => {
          objMobile[val] = [];
        });

      // if filters found, add check them
      if (fq) {
        const removeEscape = fq.replaceAll(/"/g, '');
        const splitFilters = removeEscape.split(' AND ');

        splitFilters.forEach((query: any) => {
          const id = query.split(':')[0];
          const value = query.split(':')[1];
          objMobile[id].push(value);
          if (document.getElementById(value))
            document
              .getElementById(value)
              .setAttribute('aria-pressed', 'true');
        });
      }
    }, 50);
    return () => {
      if (document.querySelector('#modalSort'))
        document
          .querySelector('#modalSort')
          .addEventListener('change', (e: any) => {
            setCurrentSort(e.target.value);
          });
    };
  }, [sortIsOpen]);

  function handleSortClick() {
    setSortIsOpen(!sortIsOpen);
  }
  function handleFilterClick() {
    setFilterIsOpen(!filterIsOpen);
  }

  function handleSortChange() {
    handleSortClick();

    newData({
      query: 'sort',
      value: currentSort,
    });
  }
  return (
    <>
      <div className="data-alter">
        <span className="data-alter__text">Alter Datasets</span>
        <div className="data-alter__buttons">
          <button type="button" onClick={handleFilterClick}>
            <div className="data-alter__svg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.24969 5.61006C6.56969 8.59006 9.99969 13.0001 9.99969 13.0001V18.0001C9.99969 19.1001 10.8997 20.0001 11.9997 20.0001C13.0997 20.0001 13.9997 19.1001 13.9997 18.0001V13.0001C13.9997 13.0001 17.4297 8.59006 19.7497 5.61006C20.2597 4.95006 19.7897 4.00006 18.9497 4.00006H5.03969C4.20969 4.00006 3.73969 4.95006 4.24969 5.61006Z"
                  fill="#4965B2"
                />
                <circle
                  cx="19"
                  cy="7.00006"
                  r="4"
                  fill="#4965B2"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            Add Filters
          </button>
          <button type="button" onClick={handleSortClick}>
            <div className="data-alter__svg">
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 12.0001H5.5C6.05 12.0001 6.5 11.5501 6.5 11.0001C6.5 10.4501 6.05 10.0001 5.5 10.0001H1.5C0.95 10.0001 0.5 10.4501 0.5 11.0001C0.5 11.5501 0.95 12.0001 1.5 12.0001ZM0.5 1.00006C0.5 1.55006 0.95 2.00006 1.5 2.00006H17.5C18.05 2.00006 18.5 1.55006 18.5 1.00006C18.5 0.450061 18.05 6.10352e-05 17.5 6.10352e-05H1.5C0.95 6.10352e-05 0.5 0.450061 0.5 1.00006ZM1.5 7.00006H11.5C12.05 7.00006 12.5 6.55006 12.5 6.00006C12.5 5.45006 12.05 5.00006 11.5 5.00006H1.5C0.95 5.00006 0.5 5.45006 0.5 6.00006C0.5 6.55006 0.95 7.00006 1.5 7.00006Z"
                  fill="#4965B2"
                />
              </svg>
            </div>
            Sort Results
          </button>
        </div>
      </div>

      {/* Sort Modal */}
      <Modal
        isOpen={sortIsOpen}
        onRequestClose={handleSortClick}
        className="dialog"
        overlayClassName="dialog__backdrop"
        closeTimeoutMS={200}
        aria={{
          labelledby: 'dialog-head',
        }}
        preventScroll={true}
        htmlOpenClassName="ReactModal__Html--open"
      >
        <div className="dialog__header">
          <h1 id="dialog-head">Sort Datasets</h1>
        </div>
        <fieldset
          className="dialog__body"
          // onChange={(e) => handleSortChange(e)}
          id="modalSort"
        >
          <legend className="sr-only">Sort Results</legend>
          {sort.map((elm, index) => {
            return (
              <label key={`sort-${index}`} htmlFor={elm.id}>
                <input
                  type="radio"
                  value={elm.id}
                  name="sort-group"
                  id={elm.id}
                />
                {elm.name}
              </label>
            );
          })}
        </fieldset>
        <div className="data-alter__footer">
          <button
            type="button"
            onClick={handleSortClick}
            className="button-secondary-blue"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleSortChange}
            className="button-primary-blue"
          >
            Apply
          </button>
        </div>
      </Modal>

      {/* Filter Modal */}
      <Modal
        isOpen={filterIsOpen}
        onRequestClose={handleFilterClick}
        className="dialog"
        overlayClassName="dialog__backdrop"
        closeTimeoutMS={200}
        aria={{
          labelledby: 'dialog-head',
        }}
        preventScroll={true}
        htmlOpenClassName="ReactModal__Html--open"
      >
        <div className="dialog__header">
          <h1 id="dialog-head">Add Filters</h1>
          <button
            type="button"
            className="dialog__close"
            aria-label="Close navigation"
            onClick={handleFilterClick}
          >
            &#x78;
          </button>
        </div>
        <fieldset
          className="dialog__body"
          // onChange={(e) => handleSortChange(e)}
        >
          <legend className="sr-only">Add Filters</legend>
          {data && (
            <div className="data-alter__filter">
              <ul id="filterSelector" role="tablist">
                {Object.keys(data).map((filter: any, index: number) => (
                  <li role="presentation" key={`filterTitle-${index}`}>
                    <a
                      role="tab"
                      tabIndex={-1}
                      href={`#${data[filter].title}`}
                      data-id={data[filter].title}
                      id={`filterTab${index}`}
                    >
                      {data[filter].title}
                    </a>
                  </li>
                ))}
              </ul>
              {Object.keys(data).map((filter: any, index: number) => (
                <div
                  key={`filter-${index}`}
                  id={data[filter].title}
                  role="tabpanel"
                  tabIndex={-1}
                  aria-labelledby={`filterTab${index}`}
                >
                  {data[filter].items &&
                    data[filter].items.map((item: any, index: number) => (
                      <label key={`filterItem-${index}`} htmlFor={item.name}>
                        <input
                          type="checkbox"
                          value={item.name}
                          name="sort-group"
                          id={item.name}
                        />
                        {item.display_name}
                      </label>
                    ))}
                </div>
              ))}
            </div>
          )}
        </fieldset>
        <div className="data-alter__footer">
          <button
            type="button"
            onClick={handleFilterClick}
            className="button-secondary-blue"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleFilterClick}
            className="button-primary-blue"
          >
            Apply
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DataAlter;
