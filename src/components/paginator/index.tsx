import './styles.scss';

export type Pagination = {
    count: number | null;
    next: string | null;
    previous: string | null;
}

type PaginatorProps = {
    pagination: Pagination ;
    handlePreviusPage: () => void;
    handleNextPage: () => void;
}

function Paginator({pagination, handlePrevius, handleNext} : PaginatorProps) {
    return (
        <div className="paginator">
            <button className={pagination.previous ? 'prev': 'prev disabled'} onClick={handlePrevius}>Anterior</button>
            <button className="next" onClick={handleNext}>Próxima</button>
        </div>
    );
}

export default Paginator;