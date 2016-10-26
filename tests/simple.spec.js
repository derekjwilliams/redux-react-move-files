import fs from 'fs'
import {filterItemsWithFiles} from '../src/actions';

describe('actions', () => {
  it('remove items with no files', () => {
    const items = filterItemsWithFiles(JSON.parse(fs.readFileSync('tests/data/missingfiles.json', 'utf-8')).items)
    expect(9).toEqual(items.length)
    const itemsWithoutFiles = filterItemsWithoutFiles(items)
    expect(0).toEqual(itemsWithoutFiles.length)
  })
})
