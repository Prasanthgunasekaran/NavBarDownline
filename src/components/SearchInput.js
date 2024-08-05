import React from 'react';
import './SearchInput.scss';
import { Command } from 'cmdk';
import { Link } from 'react-router-dom';

function SearchInput() {
    return (
        <Command>
            <Command.Input placeholder="Search" />
            <Command.List>
                <Command.Empty>No result found.</Command.Empty>
                <Command.Group>
                    <Command.Item>BCA</Command.Item>
                    <Command.Item>B.Com</Command.Item>
                    <Command.Item>BBA</Command.Item>
                    <Command.Item>B.Sc</Command.Item>
                    <Command.Item>BA</Command.Item>
                </Command.Group>
            </Command.List>
            <Link to={"/nav"}>Navbar</Link>
        </Command>
    )
}

export default SearchInput
