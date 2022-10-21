import PropTypes from 'prop-types';
import {SectionBody, SectionHeader } from './Section.styled';

const Section = ({title, children}) =>{
    return (
        <SectionBody > <SectionHeader> {title} </SectionHeader> {children} </SectionBody>
    )
}
export default Section;

Section.propTypes = {
    title: PropTypes.string,
}


