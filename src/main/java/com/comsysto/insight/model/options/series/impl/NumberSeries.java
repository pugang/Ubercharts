package com.comsysto.insight.model.options.series.impl;

import com.comsysto.insight.model.options.series.generic.AbstractSeries;
import com.comsysto.insight.model.options.series.generic.ISeries;

import java.util.Collection;

/**
 * Implementation of {@link AbstractSeries} which represents an array of Y-Values. The corresponding X-Values will be
 * automatically calculated by Highcharts, counting from 0 on.
 *
 * For example: If you set the Y-Values to new Integer[]{2,6,9}, Highcharts will plot the points (0/2), (1/6) and
 * (2/9).
 *
 * For more information read href="http://www.highcharts.com/ref/#series.
 *
 * Date: Feb 18, 2011 Time: 9:11:26 PM
 *
 * @author Mohammed El Batya
 */
public class NumberSeries extends AbstractSeries<Number[]> {

  /** {@link AbstractSeries#AbstractSeries()} */
  public NumberSeries() {
  }

  /** {@link AbstractSeries#AbstractSeries(String)} */
  public NumberSeries(String pName) {
    super(pName);
  }

  /**
   * Sets an array of Y-Values to this series. The corresponding X-Values will be automatically calculated by
   * Highcharts, counting from 0 on.
   *
   * @param pNumbers an array of Y-Values
   *
   * @return this object for convenient chaining, not a copy
   * @see NumberSeries
   * @see ISeries#setData(Object)
   */
  public ISeries<Number[]> setData(Number[] pNumbers) {
    data = pNumbers;
    return this;
  }

  /**
   * Sets a {@link Collection} of Y-Values to this series. The corresponding X-Values will be automatically calculated
   * by Highcharts, counting from 0 on.
   *
   * @param pNumbers a {@link Collection} of Y-Values
   *
   * @return this object for convenient chaining, not a copy
   * @see NumberSeries
   * @see ISeries#setData(Object)
   */
  public ISeries<Number[]> setData(Collection<Number> pNumbers) {
    return setData((Number[]) pNumbers.toArray());
  }
}