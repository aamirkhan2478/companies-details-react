import React, { useEffect } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/companies.css';
import { v4 as uuidv4 } from 'uuid';
import { fetchCompanies } from '../Redux/Companies/companies';

const Companies = () => {
  const { companies } = useSelector((state) => state.company);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return (
    <>
      <div className="container">
        <h3>Industrial Average</h3>
      </div>
      <div className="bg-pink">
        <h3>Companies Name</h3>
        <div className="row">
          {companies.map((company) => (
            <div
              key={uuidv4()}
              className="col-6"
              onClick={() => navigate(`/details/${company.symbol}`)}
              aria-hidden="true"
            >
              <FaArrowCircleRight className="icon-arrow" />
              <ul className="lists">
                <li>
                  {company.name}
                  <span>
                    (
                    {company.symbol}
                    )
                  </span>
                </li>
                <li>{company.headQuarter}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Companies;
