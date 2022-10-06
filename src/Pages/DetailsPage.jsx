import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBySymbol } from '../Redux/Companies/companies';
import '../assets/styles/details.css';

const DetailsPage = () => {
  const { companiesBySymbol } = useSelector((state) => state.company);
  const { symbol } = useParams();
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchBySymbol(symbol));
  };

  useEffect(() => {
    fetchData();
  }, []);

  document.title = 'Details Page';
  return (
    <>
      <div className="main-card">
        <div>
          <img
            width={150}
            height={100}
            src={companiesBySymbol.image}
            alt="company-logo"
          />
        </div>
        <div>
          <h2>{companiesBySymbol.name}</h2>
          <span>
            (
            {companiesBySymbol.symbol}
            )
          </span>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Symbol</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.symbol}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>CEO</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.ceo}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Country</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.country}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>City</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.city}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Price</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.price}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Range</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.range}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Visit Website</h4>
        </div>
        <div className="col-sm-6">
          <h4>
            <a href={companiesBySymbol.website} target="_black">
              Go to Website
            </a>
          </h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Address</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.address}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Full Time Employees</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.fullTimeEmployees}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Industry</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.industry}</h4>
        </div>
      </div>
      <div className="row-1">
        <div className="col-sm-6">
          <h4>Phone</h4>
        </div>
        <div className="col-sm-6">
          <h4>{companiesBySymbol.phone}</h4>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
