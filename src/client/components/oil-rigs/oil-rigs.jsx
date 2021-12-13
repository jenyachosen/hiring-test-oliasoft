import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Card, Heading, Column, Row, Spinner, Loader, Drawer, List, Input} from '~gui-library';
import {selectFilteredRigs, selectOilRigsLoaded, selectSearchString} from "~store/entities/oil-rigs/oil-rigs.selectors";
import {rigsActions} from "~store/entities/oil-rigs/oil-rigs";
import styles from './oil-rigs.module.less';

const OilRigs = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchString);
  const listOfRigs = useSelector(selectFilteredRigs);
  const loading = useSelector(selectOilRigsLoaded);

  console.log('listOfRigs ===>', listOfRigs);
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
            <Loader cover text="theme=light" theme="light">
              <Spinner dark />
            </Loader> : 
            <div className={styles.oilRigsList}>
              <Input 
                value={searchValue}
                placeholder='Find oil rigs'
                name='search-sites' 
                onChange={onChangeSearch}
              />
              {listOfRigs.length ? <Drawer open background="#f5f7f9">
                <List
                  list={{
                    name: 'Oil Rigs',
                    items: listOfRigs,
                  }}
                  bordered
                />
              </Drawer> : (
                <em>None loaded</em>
              )}
            </div>
          }
        </Column>
      </Row>
    </Card>
  );
}

export {OilRigs};
