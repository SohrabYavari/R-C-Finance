import React, { SyntheticEvent } from 'react'

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
};

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div className='bg-primary pt-1 rounded-full w-10 h-7'>
      <form onSubmit={onPortfolioDelete} >
        <input hidden={true} value={portfolioValue} />
        <button className='font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </form> 
    </div>
  )
}

export default DeletePortfolio