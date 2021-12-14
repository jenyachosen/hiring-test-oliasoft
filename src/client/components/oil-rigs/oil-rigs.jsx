import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Heading, Column, Row, Drawer, List} from '~gui-library';
import {selectFilteredRigs, selectOilRigsLoaded, selectSearchString} from "~store/entities/oil-rigs/oil-rigs.selectors";
import {rigsActions, oilRigsLoaded} from "~store/entities/oil-rigs/oil-rigs";
import styles from './oil-rigs.module.less';
import {Load} from '../loader/loader';
import {SearchInput} from '../search-input/search-input';
import {NoneLoaded} from '../none-loaded/none-loaded';

const OilRigs = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchString);
  const listOfRigs = useSelector(selectFilteredRigs);
  const loading = useSelector(selectOilRigsLoaded);

  useEffect(() => {
    dispatch(oilRigsLoaded());
  }, []);

  const onChangeSearch = (ev) => {
    dispatch(rigsActions.setSearchString(ev.target.value));
  }
  
  return (
    <Card
      heading={
        <Heading>List of oil rigs</Heading>
      }
    >
      <Row>
        <Column>
          {loading ? 
            <Load /> : 
            <div className={styles.oilRigsList}>
              <SearchInput value={searchValue} onChange={onChangeSearch} />
              {listOfRigs.length ? <Drawer open background="#f5f7f9">
                <List
                  list={{
                    name: 'Oil Rigs',
                    items: listOfRigs,
                  }}
                  bordered
                />
              </Drawer> : (
                <NoneLoaded text='None loaded' />
              )}
            </div>
          }
        </Column>
      </Row>
    </Card>
  );
}

export {OilRigs};
