import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { classNames } from 'primereact/utils';
import { Image } from 'primereact/image';

import {useGetAllBranchesQuery} from '../../app/branchApiSlice'

import "primeflex/primeflex.css"

export default function BranchView() {
    const {data: branches=[],something, isSuccess} = useGetAllBranchesQuery();
    const [layout, setLayout] = useState('grid');
    
    const listItem = (product, index) => {
       
        return (
            <div className="col-12" key={product.id} style={{direction:'rtl'}} >
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                {/* <Image src={`images/${rowData.image}`} alt="Image"  width= '250'  preview /> */}
                    <Image  src={`images/${product.image}`} alt="Image" width="250" preview />
                    
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.location},{product.city}</div>
                            <div><b>:שעות פתיחה</b></div>
                          <div> {product.open}-{product.close}</div>
                            {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-column align-items-center gap-3 py-5">
                       
                        <Image  src={ `images/${product.image}`} alt="Image" width="250" preview />
                        <div className="text-2xl font-bold text-900">{product.location}, {product.city}</div>
                        <div><b>:שעות פתיחה</b></div>
                          <div> {product.open}-{product.close}</div>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout, index) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product, index);
        else if (layout === 'grid') return gridItem(product);
    };

    const listTemplate = (products, layout) => {
        return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };


    return (
        <div className="card">
            <DataView value={branches} listTemplate={listTemplate} layout={layout} header={header()} />
        </div>
    )
}
        